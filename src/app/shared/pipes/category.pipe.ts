import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
// pipes sao usados pra testes unitarios
export class CategoryPipe implements PipeTransform {
  //
  // map = {
  //   java: 'coffee',
  //   python: 'code',
  //   java_script: 'code',
  //   php: 'terminal',
  //   ruby: 'diamond',
  //   csharp: 'developer_mode'
  // };

  transform(value: any): string {
    switch ((value || '').toLowerCase()) {
      case 'java': return 'coffee';            // ex: coffee -> talvez usar outro, pois "coffee" não é do Material Icons oficial
      case 'python': return 'code';         // "science" é ícone válido
      case 'java_script': return 'code';       // "code" existe
      case 'php': return 'terminal';           // ou "integration_instructions"
      case 'ruby': return 'diamond';           // diamond não é válido — usar "diamond" de outro set ou substituir
      case 'c#': return 'developer_mode';      // existe
      default: return 'help';                  // ícone padrão para desconhecido
    }
  }


}
