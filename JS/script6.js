const laptop ={
    size: 20, 
    specification: "4gb RAM, 250gb SSD", color:"blue",brand:"hp", is_on:false,
    describelaptop: function(){
        // let sentence = "My laptop is "+ this.size;
        let sentence = `My laptop size is  ${this.size}`;
        return sentence;
    }
};

console.log(laptop.size);
console.log(laptop["size"]);
console.log(laptop.describelaptop());


document.getElementById("body").textContent=laptop.size;
document.getElementsByClassName("div")[0].innerHTML=[laptop.specification +"<br/>"+laptop.describelaptop()];
