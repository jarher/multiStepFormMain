export default function getPrice(plan, data){
    return plan === "Monthly" ? data.price.monthly : data.price.yearly;
}