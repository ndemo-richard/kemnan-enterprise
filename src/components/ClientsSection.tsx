// src/components/ClientsSection.tsx - UPDATED
const clients = [
  "Government Institutions",
  "UN Agencies",
  "International NGOs",
  "Private Sector Companies",
  "Development Partners",
  "Civil Society Organizations"
]

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">
          Trusted by Leading Organizations
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex items-center justify-center border border-gray-200 hover:border-primary/30"
            >
              <span className="font-medium text-gray-800 text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}