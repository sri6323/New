function List(){
    const ctr=["India","Brazil","Russia","Norway","Switzerland"];
    //mapping function to get the items in alist
    ctr.sort(); //For sorting the list
    const lt=ctr.map(i => 
        <li>{i}</li>
    )
    //<li>{i.toLowerCase()}</li> , we can also write like to get in lower/upper case letters in list

    return(
        <ol>{lt}</ol>
    );
}
export default List