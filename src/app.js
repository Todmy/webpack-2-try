import moment from 'moment'
import $ from 'jquery'

import { senseOfLife } from './js/test'
import './styles.scss'
import mainTemplate from './html/main.html'

console.log('hello world!!!')
console.log(moment().format())
console.log(senseOfLife)

insertHtml(mainTemplate)

function insertHtml(html) {
    $('body').html(html)
}

