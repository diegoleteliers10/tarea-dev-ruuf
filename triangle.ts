import * as fs from 'fs';

interface TestCase {
  panelW: number;
  panelH: number;
  roofB: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculateTrianglePanels(
  panelWidth: number,
  panelHeight: number,
  roofBase: number,
  roofHeight: number
): number {
  // Implementa acá tu solución
  
  //aqui usaremos areas para calcular el numero de paneles
  
  //area_techo = roofWidth * roofHeight
  // area_panel = panelWidth * panelHeight
  
  const area_techo_triangulo = (roofBase * roofHeight)/2;
  const area_panel = panelWidth * panelHeight;
  
  const numero_paneles = Math.floor(area_techo_triangulo / area_panel);
  
  if (area_panel > area_techo_triangulo) { 
    return 0;
  } else { return numero_paneles };
}

function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");
  
  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(fs.readFileSync('test_cases_triangle.json', 'utf-8'));
  const testCases = data.testCases;
  
  console.log("Corriendo tests:");
  console.log("-------------------");
  
  testCases.forEach((test: TestCase, index: number) => {
    const result = calculateTrianglePanels(test.panelW, test.panelH, test.roofB, test.roofH);
    const passed = result === test.expected;
    
    console.log(`Test ${index + 1}:`);
    console.log(`  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofB}x${test.roofH}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
