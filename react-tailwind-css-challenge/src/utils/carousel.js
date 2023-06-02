
//rotate image in given order
export const handleImage = (arr) => {
    const count = arr.length;
    let temp_arr = [];
    for (let i=0;i<count-1;i++) {
        temp_arr.push(arr[i+1]);
    }
    temp_arr.push(arr[0]);
    return temp_arr;
};
//change the image once you click
export const changeImage = (index , arr) => {
    const temp = arr[0];
    arr[0] = arr[index-1];
    arr[index-1]=temp;

    return arr;
}