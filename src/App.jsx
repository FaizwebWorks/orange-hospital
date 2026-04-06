import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Phone, MapPin, Mail, Menu, X, Search, Calendar,
  Heart, Activity, Stethoscope, Pill, TestTube,
  Ambulance, Shield, Star, ArrowRight, Clock,
  Droplets, Scan, HeartPulse, UserCheck, AlertCircle,
  CheckCircle, ChevronDown, Video, Clock3, User, Circle,
  ChevronRight, Building2
} from 'lucide-react'
import logo from "/images/orange-logo.webp"

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

const fullDoctorsList = [
  { id: 1, name: 'Dr. B.B. Hirpara', specialty: 'General Surgery', qualification: 'M.S.', experience: '18+ Years', procedures: 'Laparoscopic, Endoscopy, Urology', available: true, timing: '9AM - 5PM' },
  { id: 2, name: 'Dr. Smita Patel', specialty: 'Cardiology', qualification: 'MD, DM', experience: '15+ Years', procedures: 'ECHO, TMT, Angiography', available: true, timing: '10AM - 4PM' },
  { id: 3, name: 'Dr. Raj Sharma', specialty: 'Urology', qualification: 'M.Ch.', experience: '12+ Years', procedures: 'Stone Removal, Prostate, Laparoscopy', available: true, timing: '10AM - 3PM' },
  { id: 4, name: 'Dr. Priya Mehta', specialty: 'Gynecology', qualification: 'MD, DGO', experience: '14+ Years', procedures: 'Delivery, IVF, Laparoscopy', available: true, timing: '9AM - 4PM' },
  { id: 5, name: 'Dr. Amit Shah', specialty: 'Orthopedics', qualification: 'MS, DNB', experience: '10+ Years', procedures: 'Joint Replacement, Sports Injury', available: true, timing: '10AM - 5PM' },
  { id: 6, name: 'Dr. Kavita Joshi', specialty: 'Pediatrics', qualification: 'MD, DCH', experience: '11+ Years', procedures: 'General Care, NICU, Vaccination', available: true, timing: '9AM - 3PM' },
  { id: 7, name: 'Dr. Vikram Singh', specialty: 'Neurology', qualification: 'DM', experience: '16+ Years', procedures: 'Brain Surgery, Stroke, Epilepsy', available: true, timing: '11AM - 4PM' },
  { id: 8, name: 'Dr. Anjali Reddy', specialty: 'Dermatology', qualification: 'MD', experience: '8+ Years', procedures: 'Skin Treatment, Laser, Cosmetic', available: true, timing: '10AM - 5PM' },
  { id: 9, name: 'Dr. Suresh Kumar', specialty: 'Gastroenterology', qualification: 'MD, DM', experience: '13+ Years', procedures: 'Endoscopy, Colonoscopy, Liver', available: true, timing: '9AM - 2PM' },
  { id: 10, name: 'Dr. Renu Desai', specialty: 'Anesthesiology', qualification: 'MD', experience: '12+ Years', procedures: 'Pain Management, ICU', available: true, timing: '24/7 On Call' },
  { id: 11, name: 'Dr. Manish Patel', specialty: 'Radiology', qualification: 'MD', experience: '10+ Years', procedures: 'X-Ray, USG, CT Scan', available: true, timing: '8AM - 8PM' },
  { id: 12, name: 'Dr. Pooja Shah', specialty: 'Ophthalmology', qualification: 'MS', experience: '9+ Years', procedures: 'Cataract, LASIK, Eye Surgery', available: true, timing: '10AM - 4PM' },
]

const facilities = [
  {
    id: 'emergency',
    icon: Ambulance,
    title: '24x7 Emergency Care',
    description: 'Round-the-clock emergency services with rapid response team and fully equipped ambulances.',
    highlight: true,
    color: 'red',
    phone: '(02637) 245500'
  },
  {
    id: 'xray',
    icon: Scan,
    title: 'X-Rays & Ultrasonography',
    description: 'Advanced imaging diagnostics with state-of-the-art digital X-Ray and 4D ultrasound machines.',
    highlight: false,
    color: 'blue',
    phone: null
  },
  {
    id: 'echo',
    icon: HeartPulse,
    title: 'ECHO & TMT Test',
    description: 'Comprehensive cardiac diagnostics including Echocardiography and Treadmill Test.',
    highlight: false,
    color: 'pink',
    phone: null
  },
  {
    id: 'dialysis',
    icon: Droplets,
    title: 'Dialysis Center',
    description: 'Advanced renal care with modern dialysis facilities and expert nephrology support.',
    highlight: false,
    color: 'teal',
    phone: null
  },
  {
    id: 'pharmacy',
    icon: Pill,
    title: 'Medicine Pharmacy',
    description: 'In-house pharmacy with comprehensive medical supplies available 24/7.',
    highlight: false,
    color: 'orange',
    phone: null
  },
  {
    id: 'opd',
    icon: Stethoscope,
    title: 'OPD Checkup',
    description: 'General and specialized outpatient consultations with experienced doctors.',
    highlight: false,
    color: 'green',
    phone: null
  },
]

const stats = [
  { value: '15000+', label: 'Surgeries Performed', icon: Heart },
  { value: '21+', label: 'Expert Doctors', icon: UserCheck },
  { value: '24/7', label: 'Emergency Care', icon: Shield },
  { value: '15+', label: 'Years of Excellence', icon: Star },
]

const specialties = ['All', 'General Surgery', 'Cardiology', 'Urology', 'Gynecology', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology', 'Gastroenterology']

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
    const increment = numericValue / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>
}

const Section = ({ children, id, className = '' }) => (
  <section id={id} className={`scroll-mt-20 ${className}`}>
    {children}
  </section>
)

const smoothScrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const AppointmentModal = ({ isOpen, onClose, doctor = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: doctor?.specialty || '',
    doctor: doctor?.name || '',
    date: '',
    time: '',
    symptoms: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', symptoms: '' })
        onClose()
      }, 2000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[95%] sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h3>
              <p className="text-gray-600">We'll call you shortly to confirm.</p>
            </motion.div>
          ) : (
            <>
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Book Appointment</h3>
                  <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                {doctor && (
                  <p className="text-sm text-brand-orange mt-1">Booking with {doctor.name}</p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select Department</option>
                        {specialties.filter(s => s !== 'All').map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                    <div className="relative">
                      <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Any Doctor</option>
                        {fullDoctorsList.map((d) => (
                          <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select Time</option>
                        <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                        <option value="Evening (3PM - 6PM)">Evening (3PM - 6PM)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brief Symptoms (Optional)</label>
                  <textarea
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                    placeholder="Describe your symptoms..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-orange text-white rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const Header = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} alt="Orange Hospital Logo" className="w-12 h-12 object-contain invert" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Orange Hospital</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Navsari</p>
            </div>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href.slice(1)); setMobileMenuOpen(false); }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E55A2B] rounded-lg hover:bg-orange-100 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <motion.a
              href="tel:02637245500"
              className="flex items-center gap-1.5 px-3 py-2 bg-emergency-red text-white rounded-full font-medium text-xs animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Emergency</span>
            </motion.a>

            <motion.button
              onClick={onBookAppointment}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-orange text-white rounded-full font-medium text-xs hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/30 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href.slice(1)); setMobileMenuOpen(false); }}
                    className="px-4 py-3 text-gray-700 hover:bg-orange-100 hover:text-[#E55A2B] rounded-lg transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:02637245500"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-emergency-red text-white rounded-full font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>24/7 Emergency</span>
                </a>
                <button
                  onClick={() => { onBookAppointment(); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange text-white rounded-full font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

const Hero = ({ onBookAppointment, onSelectDoctor }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const hospitalImage = '/images/orange-hospital.webp'

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.length > 1) {
      const filtered = fullDoctorsList.filter(doc =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(filtered)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  const handleDoctorSelect = (doctor) => {
    onSelectDoctor(doctor)
    setSearchQuery('')
    setShowResults(false)
    smoothScrollTo('doctors')
  }

  return (
    <Section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50/30" />

      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-trust-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">Trusted Healthcare since 2011</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
              We're here when you need us,{' '}
              <span className="text-brand-orange">for every care</span> in the world.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-5 max-w-xl">
              Advanced medical care and dedicated teams leading the way to better medicine in Navsari, Gujarat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a doctor or specialty..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery.length > 1 && setShowResults(true)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all shadow-lg"
                />
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20 max-h-64 overflow-y-auto">
                    {searchResults.map((doctor) => (
                      <button
                        key={doctor.id}
                        onClick={() => handleDoctorSelect(doctor)}
                        className="w-full px-4 py-3 text-left hover:bg-orange-50 border-b border-gray-50 last:border-0 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-brand-orange" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{doctor.name}</p>
                          <p className="text-sm text-gray-500">{doctor.specialty} • {doctor.qualification}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {showResults && searchQuery.length > 1 && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-center text-gray-500">
                    No doctors found
                  </div>
                )}
              </div>

              <motion.button
                onClick={onBookAppointment}
                className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-semibold hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Book OPD Checkup</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>4.8+ Patient Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-trust-teal" />
                <span>24/7 Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-trust-teal/10 rounded-full blur-3xl" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <img
                  src={hospitalImage}
                  alt="Orange Hospital - Navsari"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" fill="white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Orange Hospital</h3>
                      <p className="text-sm text-white/80">Navsari, Gujarat</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.a
                href="tel:02637245500"
                className="absolute -right-2 -top-2 p-3 bg-emergency-red rounded-full shadow-xl animate-pulse-glow cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </Section>
  )
}

const Stats = () => {
  return (
    <Section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors" />
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <stat.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pioneer.webp"
                  alt="Dr. B.B. Hirpara"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="white" />
                    <div>
                      <p className="text-white font-bold text-lg lg:text-xl">15,000+</p>
                      <p className="text-white/80 text-sm">Successful Surgeries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-4 lg:mb-6"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
              >
                <UserCheck className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium text-brand-orange">Our Pioneer</span>
              </motion.div>

              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                Dr. B.B. <span className="text-brand-orange">Hirpara</span> (M.S.)
              </h3>

              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
                With over 18+ years of excellence in medical care, Dr. B.B. Hirpara established Orange Hospital in 2011 with a vision to provide advanced healthcare to Navsari and surrounding regions.
              </p>

              <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                A pioneer in laparoscopic, endoscopic, and advanced urological surgeries, having performed over 15,000 successful surgeries. Formerly at Shivani Surgical Hospital.
              </p>

              <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
                {['Laparoscopic Surgery', 'Endoscopy', 'Urology'].map((specialty, idx) => (
                  <span key={idx} className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium">
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange/10 border-2 border-white flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-brand-orange" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-900">21+ Expert Doctors</p>
                  <p className="text-sm text-gray-500">Working together</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

const Facilities = ({ onBookAppointment }) => {
  return (
    <Section id="facilities" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-orange">Facilities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art medical facilities equipped with the latest technology to provide you with the best healthcare.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${facility.highlight
                ? 'bg-gradient-to-br from-emergency-red/5 to-emergency-red/10 border-emergency-red/20 shadow-lg shadow-emergency-red/10'
                : 'bg-white border-gray-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5'
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${facility.highlight
                ? 'bg-emergency-red/10'
                : facility.color === 'blue' ? 'bg-trust-blue/10' :
                  facility.color === 'pink' ? 'bg-pink-100' :
                    facility.color === 'teal' ? 'bg-trust-teal/10' :
                      facility.color === 'orange' ? 'bg-orange-100' :
                        'bg-green-100'
                }`}>
                <facility.icon className={`w-7 h-7 ${facility.highlight ? 'text-emergency-red' :
                  facility.color === 'blue' ? 'text-trust-blue' :
                    facility.color === 'pink' ? 'text-pink-600' :
                      facility.color === 'teal' ? 'text-trust-teal' :
                        facility.color === 'orange' ? 'text-orange-600' :
                          'text-green-600'
                  }`} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E55A2B] transition-colors">
                {facility.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {facility.description}
              </p>

              {facility.highlight && (
                <div className="mt-4 flex gap-2">
                  <a
                    href="tel:02637245500"
                    className="flex-1 py-2 bg-emergency-red text-white text-center rounded-lg font-medium text-sm hover:bg-red-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={onBookAppointment}
                    className="flex-1 py-2 bg-white border border-emergency-red text-emergency-red text-center rounded-lg font-medium text-sm hover:bg-emergency-red/5 transition-colors"
                  >
                    Book
                  </button>
                </div>
              )}

              {facility.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-emergency-red text-white text-xs font-semibold rounded-full animate-pulse">
                    24/7
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const Doctors = ({ onBookAppointment, selectedDoctor }) => {
  const [activeSpecialty, setActiveSpecialty] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (selectedDoctor) {
      setActiveSpecialty(selectedDoctor.specialty)
      const element = document.getElementById('doctors')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [selectedDoctor])

  const filteredDoctors = fullDoctorsList.filter(doctor => {
    const matchesSpecialty = activeSpecialty === 'All' || doctor.specialty.includes(activeSpecialty)
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  return (
    <Section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find a <span className="text-brand-orange">Doctor</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search from our 21+ highly qualified specialists across various departments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-100 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all rounded-xl"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveSpecialty(specialty)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSpecialty === specialty
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <UserCheck className="w-8 h-8 text-brand-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 truncate">{doctor.name}</h4>
                  <p className="text-sm text-gray-500">{doctor.qualification}</p>
                  <p className="text-xs text-gray-400 mt-1">{doctor.experience}</p>
                </div>
                {doctor.available && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Available</span>
                )}
              </div>

              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl mb-3">
                <Stethoscope className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-sm text-gray-600 truncate">{doctor.specialty}</span>
              </div>

              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl mb-4">
                <Clock3 className="w-4 h-4 text-trust-teal shrink-0" />
                <span className="text-sm text-gray-600">{doctor.timing}</span>
              </div>

              <button
                onClick={() => onBookAppointment(doctor)}
                className="w-full py-3 bg-brand-orange text-white rounded-xl font-medium hover:bg-brand-orange-dark transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
              >
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </Section>
  )
}

const Gallery = () => {
  const hospitalImage = '/images/orange-hospital.webp'

  return (
    <Section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-orange">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our world-class medical facilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={hospitalImage}
            alt="Orange Hospital - Navsari"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-2xl font-bold text-white">Orange Hospital</h3>
            <p className="text-white/80">Thakor Wadi Street, Station Road, Navsari</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { title: 'Emergency Services', subtitle: '24/7 Available' },
            { title: 'Advanced Diagnostics', subtitle: 'State-of-the-art' },
            { title: 'Expert Care', subtitle: 'Qualified Doctors' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg aspect-video group"
            >
              <img
                src={hospitalImage}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-white/70 text-xs">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const Footer = ({ onBookAppointment }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="logo" className='h-12 w-12 object-contain' />
              <div>
                <h3 className="text-lg font-bold">Orange Hospital</h3>
                <p className="text-xs text-gray-400">Navsari, Gujarat</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We're here when you need us for every care in the world. Advanced medical care and dedicated teams leading the way to better medicine.
            </p>

            <a
              href="https://www.google.com/maps/place/Orange+Hospital/@20.9490764,72.91556,19z/data=!3m1!4b1!4m6!3m5!1s0x3be0f79155d2760f:0x83a44145131c8946!8m2!3d20.9490751!4d72.9162037!16s%2Fg%2F11h0by8kg?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="aspect-video bg-gray-700/50 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.523456789!2d72.913!3d20.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f79155d2760f%3A0x83a44145131c8946!2sOrange%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Orange Hospital Location"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Thakor Wadi Street, Station Road, Navsari
              </p>
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Patient Portal', action: () => { } },
                { name: 'Find a Doctor', action: () => smoothScrollTo('doctors') },
                { name: 'Our Facilities', action: () => smoothScrollTo('facilities') },
                { name: 'Emergency Services', action: () => window.location.href = 'tel:02637245500' },
                { name: 'About Us', action: () => smoothScrollTo('about') },
                { name: 'Gallery', action: () => smoothScrollTo('gallery') },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-[#E55A2B] hover:translate-x-1 transition-all flex items-center gap-2 text-left w-full"
                  >
                    <Circle className="w-2 h-2 fill-current" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Facilities</h4>
            <ul className="space-y-3">
              {[
                '24x7 Emergency Care',
                'X-Rays & USG',
                'ECHO & TMT Test',
                'Dialysis Center',
                'Medicine Pharmacy',
                'OPD Checkup'
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => smoothScrollTo('facilities')}
                    className="text-gray-400 hover:text-[#E55A2B] hover:translate-x-1 transition-all flex items-center gap-2 text-left w-full"
                  >
                    <Circle className="w-2 h-2 fill-current" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:02637245500"
                className="flex items-center gap-3 p-3 bg-emergency-red/10 rounded-xl hover:bg-emergency-red/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 text-emergency-red" />
                <div>
                  <p className="text-sm text-gray-400">Emergency</p>
                  <p className="font-semibold">(02637) 245500</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:02637242200"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <div>
                  <p className="text-sm text-gray-400">Landline</p>
                  <p className="font-semibold">(02637) 242200</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:916354910363"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 text-trust-teal" />
                <div>
                  <p className="text-sm text-gray-400">Mobile</p>
                  <p className="font-semibold">+91 63549 10363</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:drbbh@yahoo.in"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-5 h-5 text-brand-orange" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">drbbh@yahoo.in</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Orange Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button className="hover:text-[#E55A2B] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#E55A2B] transition-colors">Terms of Service</button>
              <button className="hover:text-[#E55A2B] transition-colors">Accessibility</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleBookAppointment = (doctor = null) => {
    setSelectedDoctor(doctor)
    setModalOpen(true)
  }

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative max-w-[100vw]">
      <Header onBookAppointment={() => handleBookAppointment()} />
      <main>
        <Hero
          onBookAppointment={() => handleBookAppointment()}
          onSelectDoctor={handleSelectDoctor}
        />
        <Stats />
        <Facilities onBookAppointment={() => handleBookAppointment()} />
        <Doctors
          onBookAppointment={handleBookAppointment}
          selectedDoctor={selectedDoctor}
        />
        <Gallery />
      </main>
      <Footer onBookAppointment={() => handleBookAppointment()} />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setSelectedDoctor(null); }}
        doctor={selectedDoctor}
      />
    </div>
  )
}

export default App