import { ref, onMounted } from 'vue'
import rankingsData from './rankings.js'

const App = {
  setup() {
    const count = ref(30)
    const rankings = ref([])
    const week = ref('')
    const countries = ref([])
    const selectedCountry = ref('')

    const fetchRankings = async () => {
      rankings.value = rankingsData['data']
      week.value = rankingsData['week']
      const countriesSet = new Set(rankingsData['data'].map(player => player.country));
      countries.value = Array.from(countriesSet).sort()
      countries.value.unshift('ALL')
      selectedCountry.value = countries.value[0]
    }

    onMounted(async () => {
      fetchRankings()
      console.log(countries.value)
    })

    return { count, rankings, week, countries, selectedCountry }
  },
  computed: {
    filteredRankings() {
      return this.selectedCountry === 'ALL'
        ? this.rankings
        : this.rankings.filter(ranking => ranking.country === this.selectedCountry);
    }
  },
  template: `
    <h2>Week: {{ week }}</h2>
    <select v-model="selectedCountry" name="countries" id="countries">
      <option v-for="country in countries" :key="country" :value="country">
        {{ country }}
      </option>
    </select>
    <table class="">
      <thead>
        <tr>
          <th>RANK</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>POINTS</th>
          <th>COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ranking, index) in filteredRankings" :key="index">
          <td>{{ ranking.rank }}</td>
          <td>{{ ranking.name }}</td>
          <td>{{ ranking.age }}</td>
          <td>{{ ranking.points }}</td>
          <td>{{ ranking.country }}</td>
        </tr>
      </tbody>
    </table>
  `
}

export default App
