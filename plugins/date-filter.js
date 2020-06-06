import moment from 'moment'
import Vue from 'vue'

const DateFilter = function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY HH:mm')
  }
}

Vue.filter('date', DateFilter)
