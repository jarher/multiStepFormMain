export default function pageTransition(callback){
    setTimeout(() => callback(true), 300);
}