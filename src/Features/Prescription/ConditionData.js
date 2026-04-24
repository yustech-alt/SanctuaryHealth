// src/Features/Prescription/ConditionData.js

export const conditionData = {
  malaria: {
    id: "malaria",
    title: "Malaria",
    icon: "🦟",
    warning: {
      type: "professional",
      message: "Malaria requires professional diagnosis and treatment. Do not attempt to treat at home with over-the-counter medications."
    },
    costs: [
      { name: "Lagos Island General Hospital", type: "Public Hospital", price: "NGN 8,000 - 15,000", dist: "2.3 km", wait: "45-90 min", rating: 4.2 },
      { name: "Yaba Primary Health Centre", type: "PHC", price: "NGN 3,500 - 6,000", dist: "1.8 km", wait: "30-60 min", rating: 4.0 },
      { name: "Victoria Island Medical Center", type: "Private Hospital", price: "NGN 25,000 - 40,000", dist: "5.1 km", wait: "15-30 min", rating: 4.7 }
    ],
    options: [
      { category: "Generic Drugs", title: "Artemether-Lumefantrine", desc: "Generic version of Coartem. Equally effective.", price: "NGN 1,200 - 2,000", save: "60%" },
      { category: "Community Health", title: "CHW Home Visit", desc: "Rapid diagnostic test and treatment at your home", price: "NGN 4,000 - 6,000", save: "40%" }
    ],
    prescriptions: [
      { name: "Artemether-Lumefantrine", strength: "20/120mg", dosage: "1 tablet", frequency: "Twice daily", duration: "3 Days", instructions: "Take after a fatty meal." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Professional evaluation is recommended. Schedule an appointment soon." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen or fever exceeds 38.5°C, seek immediate care." }
    ]
  },

  "typhoid-fever": {
    id: "typhoid-fever",
    title: "Typhoid Fever",
    icon: "🤒",
    warning: {
      type: "home",
      message: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days."
    },
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Ciprofloxacin (Generic)", desc: "Effective antibiotic for typhoid treatment.", price: "NGN 1,500 - 3,000", save: "45%" }
    ],
    prescriptions: [
      { name: "Ciprofloxacin", strength: "500mg", dosage: "1 tablet", frequency: "Twice daily", duration: "7 Days", instructions: "Drink plenty of water. Avoid taking with milk or yogurt." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  "common-cold": {
    id: "common-cold",
    title: "Common Cold",
    icon: "🤧",
    warning: {
      type: "home",
      message: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days."
    },
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Cold Relief", desc: "Multisymptom relief for congestion and sneezing.", price: "NGN 500 - 1,200", save: "40%" }
    ],
    prescriptions: [
      { name: "Vitamin C & Zinc", strength: "1000mg", dosage: "1 tablet", frequency: "Once daily", duration: "5 Days", instructions: "Dissolve in water or take after a meal to support immunity." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  headache: {
    id: "headache",
    title: "Headache",
    icon: "🤕",
    warning: {
      type: "home",
      message: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days."
    },
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    prescriptions: [
      { name: "Paracetamol", strength: "500mg", dosage: "2 tablets", frequency: "Three times daily", duration: "3 Days", instructions: "Take as needed for pain. Do not exceed 8 tablets in 24 hours." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  "stomach-pain": {
    id: "stomach-pain",
    title: "Stomach Pain",
    icon: "🤢",
    warning: {
      type: "home",
      message: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days."
    },
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Antacid Suspension", desc: "Relief from indigestion and heartburn.", price: "NGN 800 - 1,500", save: "35%" }
    ],
    prescriptions: [
      { name: "Hyoscine Butylbromide", strength: "10mg", dosage: "1 tablet", frequency: "Three times daily", duration: "2 Days", instructions: "Take before meals to reduce cramping." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  cough: {
    id: "cough",
    title: "Cough",
    icon: "😷",
    warning: {
      type: "home",
      message: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days."
    },
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Expectorant", desc: "Helps clear mucus and soothe the throat.", price: "NGN 1,000 - 1,800", save: "40%" }
    ],
    prescriptions: [
      { name: "Cough Suppressant Syrup", strength: "100ml", dosage: "10ml", frequency: "Three times daily", duration: "5 Days", instructions: "Avoid cold drinks. Best taken after meals." }
    ],
    guidance: [
      { step: 1, title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { step: 2, title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { step: 3, title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  }
};