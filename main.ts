import * as fs from 'fs';

interface TestCase {
  panelW: number;
  panelH: number;
  roofW: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculatePanels(
  panelWidth: number,
  panelHeight: number,
  roofWidth: number,
  roofHeight: number
): number {
  // Implementa acá tu solución
  
  //aqui usaremos areas para calcular el numero de paneles
  
  //area_techo = roofWidth * roofHeight
  // area_panel = panelWidth * panelHeight
  
  //edge cases, ya que para que se puedan colocar paneles, el lado del panel a o b no puede ser mayor al lado del techo x e y o si no 
  // no podran colocarse los paneles 
  if(panelHeight>roofHeight || panelWidth>roofWidth){
    return 0;
  }
  
  const area_techo = roofWidth * roofHeight;
  const area_panel = panelWidth * panelHeight;
  
  const numero_paneles = Math.floor(area_techo / area_panel);
  
  return numero_paneles;
}

function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");
  
  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(fs.readFileSync('test_cases.json', 'utf-8'));
  const testCases = data.testCases;
  
  console.log("Corriendo tests:");
  console.log("-------------------");
  
  testCases.forEach((test: TestCase, index: number) => {
    const result = calculatePanels(test.panelW, test.panelH, test.roofW, test.roofH);
    const passed = result === test.expected;
    
    console.log(`Test ${index + 1}:`);
    console.log(`  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofW}x${test.roofH}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
