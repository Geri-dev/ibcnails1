import React from 'react'

const regularManicure = [
  { name: 'Manikyr Klasik', price: '1500' },
  { name: 'Zgjatje me tipsa', price: '3500' },
  { name: 'Zgjatje me letër', price: '4000' },
  { name: 'Master xhel', price: '4000' },
  { name: 'Soft Tips', price: '10.000' },
  { name: 'Thonj natyral me mega bazë', price: '2500' },
  { name: 'Thonj natyral me xhel', price: '2700' },
  { name: 'Manikyr Xhel', price: '2000' },
  { name: 'Heqje xheli', price: '700' },
  { name: 'Heqje akriliku', price: '1000' },
  { name: 'French/Ombre/Cat eye/Pikturë', price: '700' },
  { name: 'Trajtim Chanel/Dior/Hermes', price: '1500' },
]

const regularPedicure = [
  { name: 'Pedikyr klasik (trajtim)', price: '2000' },
  { name: 'Pedikyr klasik + manikyr', price: '2500' },
  { name: 'Pedikyr klasik + manikyr xhel', price: '3000' },
  { name: 'Manikyr xhel', price: '2500' },
  { name: 'French/ Dizajne', price: '700' },
  { name: 'Zgjatje me master xhel', price: '4000' },
  { name: 'Trajtim Pharma Foot', price: '2000' },
  { name: 'Trajtim Pharma Foot + manikyr xhel', price: '3500' },
]

const vipManicure = [
  { name: 'Manikyr Klasik', price: '3000' },
  { name: 'Zgjatje me tipsa', price: '7000' },
  { name: 'Zgjatje me letër', price: '8000' },
  { name: 'Soft Tips', price: '12.000' },
  { name: 'Tipsa dual form', price: '5000' },
  { name: 'Thonj natyral me mega bazë', price: '5000' },
  { name: 'Thonj natyral me xhel', price: '5500' },
  { name: 'Manikyr Xhel', price: '4000' },
  { name: 'Heqje xheli', price: '1400' },
  { name: 'French / Ombre / Pasqyrë / Cateye / Dizajn', price: '1400' },
  { name: 'Trajtim Chanel / Dior / Hermes', price: '3000' },
]

const vipPedicure = [
  { name: 'Pedikyr klasik (trajtim)', price: '4000' },
  { name: 'Pedikyr klasik + manikyr klasik', price: '5000' },
  { name: 'Pedikyr klasik + manikyr xhel', price: '6000' },
  { name: 'Manikyr xhel', price: '5000' },
  { name: 'Zgjatje me master xhel', price: '8000' },
  { name: 'Trajtim Pharma Foot + manikyr xhel', price: '7000' },
]

function PriceCard({ title, items }: { title: string; items: { name: string; price: string }[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden h-full min-h-[320px] flex flex-col">
      <div className="px-4 py-3 border-b border-border/50 flex-shrink-0">
        <h3 className="font-heading text-base font-semibold" style={{ color: '#D9A6AE' }}>{title}</h3>
      </div>
      <ul className="divide-y divide-border/30 flex-1 overflow-y-auto">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between items-center px-4 py-2.5 text-sm gap-2">
            <span className="text-foreground truncate">{item.name}</span>
            <span className="text-muted-foreground font-medium whitespace-nowrap flex-shrink-0">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 px-4" style={{ background: 'linear-gradient(180deg, hsl(25 60% 98%) 0%, hsl(350 30% 96%) 50%, hsl(25 60% 98%) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Services</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Price <span className="italic text-primary">List</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Transparent pricing for all our premium nail services. Choose between our standard studio or VIP experience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-heading text-lg font-bold text-foreground whitespace-nowrap">PRICE LIST</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <PriceCard title="Manicure price" items={regularManicure} />
              <PriceCard title="Pedicure price" items={regularPedicure} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-heading text-lg font-bold text-foreground whitespace-nowrap">PRICE LIST VIP</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <PriceCard title="Manicure price" items={vipManicure} />
              <PriceCard title="Pedicure price" items={vipPedicure} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
