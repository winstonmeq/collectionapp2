


const ORfunction = () => {

    function removeRandomValue(array) {
        if (array.length === 0) {
          return;
        }
      
        const index = array.length;
        const removed = array[index];
        array.splice(index, 1);
        return removed;
      }
      
      let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      let removed = removeRandomValue(numbers);

    //   while (numbers.length > 0) {
    //     removeRandomValue(numbers);
    //     console.log("Removed:", removed);
    //     console.log("Numbers:", numbers);
    //   }

    console.log("Removed:", removed);
    console.log("Numbers:", numbers);
    

return (
    <>
            ORfunction
      {removed}
    </>
)

}

export default ORfunction