'use client'

import React, { useState } from 'react'
import { XIcon } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Manikyr Klasik',
  'Zgjatje me tipsa',
  'Zgjatje me letër',
  'Master xhel',
  'Soft Tips',
  'Manikyr Xhel',
  'Pedikyr klasik',
  'Pedikyr klasik + manikyr',
  'French/Ombre/Cat eye',
  'Trajtim Chanel/Dior/Hermes',
]

const TIME_OPTIONS = (() => {
  const times: string[] = []
  for (let h = 9; h <= 21; h++) {
    times.push(`${h.toString().padStart(2, '0')}:00`)
    if (h < 21) times.push(`${h.toString().padStart(2, '0')}:30`)
  }
  return times
})()

function getDateOptions(): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = []
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  for (let i = 0; i < 28; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    if (d.getDay() === 0) continue
    const value = d.toISOString().split('T')[0]
    const label = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`
    options.push({ value, label })
  }
  return options
}

const DATE_OPTIONS = getDateOptions()

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function isSunday(dateStr: string): boolean {
  if (!dateStr) return false
  const d = new Date(dateStr + 'T12:00:00')
  return d.getDay() === 0
}

function formatDateDisplay(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[d.getMonth()]} ${d.getDate()}`
}

function PopupOverlay({ title, subtitle, onClose, children }: { title: string; subtitle?: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h4 className="font-heading text-lg font-semibold text-foreground">{title}</h4>
          <button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Close">
            <XIcon className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <div className="p-4">
          {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [timePopupOpen, setTimePopupOpen] = useState(false)
  const [datePopupOpen, setDatePopupOpen] = useState(false)
  const [servicesPopupOpen, setServicesPopupOpen] = useState(false)
  const [dateError, setDateError] = useState('')

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleDateSelect = (value: string) => {
    if (isSunday(value)) {
      setDateError('Sunday is closed. Please select another day.')
    } else {
      setDate(value)
      setDateError('')
      setDatePopupOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date && isSunday(date)) {
      setDateError('Sunday is closed. Please select another day.')
      return
    }
    alert('Thank you! Your appointment request has been received. We will contact you shortly.')
    onClose()
    setFullName('')
    setPhone('')
    setDate('')
    setTime('')
    setSelectedServices([])
    setDateError('')
  }

  if (!isOpen) return null

  function SelectButtonContent({ hasValue, value, emptyMobile, emptyDesktop, valueDisplay }: { hasValue: boolean; value: string; emptyMobile: string; emptyDesktop: string; valueDisplay?: string }) {
    if (hasValue) return <span>{valueDisplay ?? value}</span>
    return (
      <>
        <span className="md:hidden text-muted-foreground">{emptyMobile}</span>
        <span className="hidden md:inline text-muted-foreground">{emptyDesktop}</span>
      </>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex-shrink-0 px-6 py-4 border-b border-border flex items-center justify-between rounded-t-2xl">
          <h3 className="font-heading text-xl font-bold text-foreground">Book Your Appointment</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Close">
            <XIcon className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-5 overflow-y-auto flex-1 min-h-0">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="+355 69 xxx xxxx" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Date</label>
              <button type="button" onClick={() => setDatePopupOpen(true)} className={`w-full px-4 py-3 pr-10 rounded-xl border bg-background text-left text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors flex items-center relative hover:border-primary/50 ${dateError ? 'border-red-500' : 'border-input'}`}>
                <SelectButtonContent hasValue={!!date} value={date} emptyMobile="Select" emptyDesktop="Select date" valueDisplay={date ? formatDateDisplay(date) : undefined} />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </button>
              {dateError && <p className="text-xs text-red-500 mt-1">{dateError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Time</label>
              <button type="button" onClick={() => setTimePopupOpen(true)} className="w-full px-4 py-3 pr-10 rounded-xl border border-input bg-background text-left text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors flex items-center relative hover:border-primary/50">
                <SelectButtonContent hasValue={!!time} value={time} emptyMobile="Select" emptyDesktop="Select time" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Services (select one or more)</label>
            <button type="button" onClick={() => setServicesPopupOpen(true)} className="w-full px-4 py-3 pr-10 rounded-xl border border-input bg-background text-left text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors flex items-center relative hover:border-primary/50">
              {selectedServices.length ? <span>{selectedServices.length} service(s) selected</span> : (<><span className="md:hidden text-muted-foreground">Select</span><span className="hidden md:inline text-muted-foreground">Select services</span></>)}
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <button type="submit" className="w-full mt-6 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">Confirm Booking</button>
        </form>
      </div>
      {datePopupOpen && (
        <PopupOverlay title="Select date" subtitle="We're closed on Sundays. Choose your preferred day." onClose={() => setDatePopupOpen(false)}>
          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {DATE_OPTIONS.map((opt) => (
              <button key={opt.value} type="button" onClick={() => handleDateSelect(opt.value)} className={`py-3 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${date === opt.value ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary ring-offset-2' : 'bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary'}`}>
                {opt.label}
              </button>
            ))}
          </div>
        </PopupOverlay>
      )}
      {timePopupOpen && (
        <PopupOverlay title="Select time" subtitle="We're open 9:00 – 21:00. Choose your preferred slot." onClose={() => setTimePopupOpen(false)}>
          <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {TIME_OPTIONS.map((t) => (
              <button key={t} type="button" onClick={() => { setTime(t); setTimePopupOpen(false) }} className={`py-3 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${time === t ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary ring-offset-2' : 'bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary'}`}>
                {t}
              </button>
            ))}
          </div>
        </PopupOverlay>
      )}
      {servicesPopupOpen && (
        <PopupOverlay title="Select services" subtitle="Choose one or more services for your appointment." onClose={() => setServicesPopupOpen(false)}>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {SERVICE_OPTIONS.map((service) => (
              <label key={service} className={`flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 ${selectedServices.includes(service) ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 hover:bg-primary/20'}`}>
                <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => toggleService(service)} className="rounded border-input text-primary focus:ring-primary w-4 h-4" />
                <span className="text-sm font-medium">{service}</span>
              </label>
            ))}
          </div>
        </PopupOverlay>
      )}
    </div>
  )
}
