let defaultCity = '成都'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}

export default {
  city: defaultCity
}
