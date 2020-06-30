export const changePage = target => {
  return {
    type: 'NAVIGATE',
    target, // 'listing' or 'cart'
  }
}
