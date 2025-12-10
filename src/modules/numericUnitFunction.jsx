
export default numericUnitFunction = (number) => {
    const typeChangeData = number.toString();

    if(typeChangeData.length > 3){
        const numericUnit = typeChangeData.substring(0, typeChangeData.length - 3);
        return numericUnit + " K";
    }else{
        return number;
    }
};