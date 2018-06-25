var katzDeli = []; 
var ticket = 0;
function takeANumber(katzDeliLine){
ticket = ticket + 1;
  katzDeliLine.push(ticket)
  return `Welcome. You're Ticket number ${ticket}`
  
}

// takeANumber(katzDeliLine) => "Welcome. You're Ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome. You're Ticket number #2" [1, 2]
// nowServing(katzDeliLine) => "Currently serving: #1" [2]
// takeANumber(katzDeliLine) => "Welcome. You're Ticket number #3" [2, 3]


function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
 } else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
  return "The line is currently empty."
  }
  let newArray = [] 
  for(let i=0; i< katzDeliLine.length; i++) {
    newArray.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${newArray.join(", ")}`
}