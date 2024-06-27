import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2' 
const portfolioURL = 'https://leahbasson.github.io/vueProject/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    resume: null,
    subjects: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) { 
      state.jobTitle = value
    },
    setAbout(state, value) { 
      state.about = value
    },
    setResume(state, value) { 
      state.resume = value
    },
    setExperience(state, value) { 
      state.experiences = value
    },
    setSkills(state, value) { 
      state.skills = value
    },
    setTestimonials(state, value) { 
      state.testimonials = value
    },
    setProjects(state, value) { 
      state.projects = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try {
        let { jobTitle } = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle", jobTitle)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context) {
      try {
        let { about } = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchResume(context) {
      try {
        let { resume } = await (await axios.get(portfolioURL)).data
        context.commit("setResume", resume)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - resume",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSubject(context) {
      try {
        let { subjects } = await (await axios.get(portfolioURL)).data
        context.commit("setSubject", subjects)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - subjects",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context) {
      try {
        let { skills } = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - skills",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - testimonials",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - projects",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})