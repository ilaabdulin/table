import request from 'superagent'

const addressMin = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
const addressMax = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

// асинхронный гет запрос, общая функция под разные данные

const fetchList = async (address) => {
  const {body} = await request.get(
    address
  )
  return body
}

// асинхронный гет запрос малых данных

export const fetchMinList = () => {
  return fetchList(addressMin);
}

// асинхронный гет запрос больших данных

export const fetchMaxList = () => {
  return fetchList(addressMax);
}


