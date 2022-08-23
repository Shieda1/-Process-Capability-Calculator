// https://calculator.swiftutors.com/process-capability-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const processCapabilityRadio = document.getElementById('processCapabilityRadio');
const upperSpecificationLimitRadio = document.getElementById('upperSpecificationLimitRadio');
const lowerSpecificationLimitRadio = document.getElementById('lowerSpecificationLimitRadio');
const processStandardDeviationRadio = document.getElementById('processStandardDeviationRadio');

let processCapability;
const six = 6;
let upperSpecificationLimit = v1;
let lowerSpecificationLimit = v2;
let processStandardDeviation = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

processCapabilityRadio.addEventListener('click', function() {
  variable1.textContent = '(USL) Upper Specification Limit';
  variable2.textContent = '(LSL) Lower Specification Limit';
  variable3.textContent = '(σ) Process Standard Deviation';
  upperSpecificationLimit = v1;
  lowerSpecificationLimit = v2;
  processStandardDeviation = v3;
  result.textContent = '';
});

upperSpecificationLimitRadio.addEventListener('click', function() {
  variable1.textContent = '(Cp) Process Capability';
  variable2.textContent = '(LSL) Lower Specification Limit';
  variable3.textContent = '(σ) Process Standard Deviation';
  processCapability = v1;
  lowerSpecificationLimit = v2;
  processStandardDeviation = v3;
  result.textContent = '';
});

lowerSpecificationLimitRadio.addEventListener('click', function() {
  variable1.textContent = '(Cp) Process Capability';
  variable2.textContent = '(USL) Upper Specification Limit';
  variable3.textContent = '(σ) Process Standard Deviation';
  processCapability = v1;
  upperSpecificationLimit = v2;
  processStandardDeviation = v3;
  result.textContent = '';
});

processStandardDeviationRadio.addEventListener('click', function() {
  variable1.textContent = '(Cp) Process Capability';
  variable2.textContent = '(USL) Upper Specification Limit';
  variable3.textContent = '(LSL) Lower Specification Limit';
  processCapability = v1;
  upperSpecificationLimit = v2;
  lowerSpecificationLimit = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(processCapabilityRadio.checked)
    result.textContent = `Process Capability = ${computeProcessCapability().toFixed(2)}`;

  else if(upperSpecificationLimitRadio.checked)
    result.textContent = `Upper Specification Limit = ${computeUpperSpecificationLimit().toFixed(2)}`;

  else if(lowerSpecificationLimitRadio.checked)
    result.textContent = `Lower Specification Limit = ${computeLowerSpecificationLimit().toFixed(2)}`;

  else if(processStandardDeviationRadio.checked)
    result.textContent = `Process Standard Deviation = ${computeProcessStandardDeviation().toFixed(2)}`;
})

// calculation

function computeProcessCapability() {
  return (Number(upperSpecificationLimit.value) - Number(lowerSpecificationLimit.value)) / (six * Number(processStandardDeviation.value));
}

function computeUpperSpecificationLimit() {
  return (Number(processCapability.value) * six * Number(processStandardDeviation.value)) + Number(lowerSpecificationLimit.value);
}

function computeLowerSpecificationLimit() {
  return Number(upperSpecificationLimit.value) - (Number(processCapability.value) * six * Number(processStandardDeviation.value));
}

function computeProcessStandardDeviation() {
  return (Number(upperSpecificationLimit.value) - Number(lowerSpecificationLimit.value)) / (six * Number(processCapability.value));
}