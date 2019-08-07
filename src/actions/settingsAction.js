const api = "ec2-52-206-76-101.compute-1.amazonaws.com";
const ebay = {
    account: api + "/"
};

export function connectAccount(){
    fetch(ebay.account)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}