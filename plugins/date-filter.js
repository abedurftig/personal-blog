import moment from 'moment'
import Vue from 'vue'

const DateFilter = function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
}

Vue.filter('date', DateFilter)
