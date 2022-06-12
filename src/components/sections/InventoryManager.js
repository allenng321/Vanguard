// const dataToAdd = [
//   ['Frozen yoghurt', 159, 6.0, 24, 4.0],
//   ['Ice cream sandwich', 237, 9.0, 37, 4.3],
//   ['Eclair', 262, 16.0, 24, 6.0],
//   ['Cupcake', 305, 3.7, 67, 4.3],
//   ['Gingerbread', 356, 16.0, 49, 3.9],
// ];

export function searchOnType(payload, text) {
  let newRow = [];
  for (let i=0; i < payload.length; i += 1) {
    const currentData = payload[i]
    // console.log(currentData['sneaker'])
    if (currentData['sneaker'].includes(text)) {
      newRow.push(currentData)
    }
  }

  console.log("passed this point")

  newRow.forEach(element => {
    console.log(element)
  })
}
