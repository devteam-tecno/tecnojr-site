# Testing Documentation

## Overview

Este projeto utiliza uma stack moderna de testes para garantir qualidade e prevenir regressões:

- **Vitest** - Test runner rápido com suporte nativo a ESM
- **React Testing Library** - Testes focados no comportamento do usuário
- **@testing-library/user-event** - Simulação de interações realistas
- **jsdom** - Ambiente DOM para testes React

## Quick Start

```bash
# Executar todos os testes (watch mode)
npm test

# Executar uma vez (útil para CI)
npm run test:run

# Interface visual para debugging
npm run test:ui

# Ver relatório de cobertura
npm run test:coverage
```

## Estrutura de Testes

Seguimos o padrão de **co-localização**: testes ficam junto com o código que testam.

```
src/
  components/
    ui/
      button.tsx
      button.test.tsx          # ✅ Co-localizado
  lib/
    utils.ts
    utils.test.ts              # ✅ Co-localizado
  app/
    api/
      contact/
        route.ts
        route.test.ts          # ✅ Co-localizado
```

### Naming Conventions

- Arquivos de teste: `*.test.ts` ou `*.test.tsx`
- Describe blocks: Use o nome do componente/módulo
- Test cases: Comece com verbos ("renders", "calls", "validates")

## Writing Tests

### Unit Tests (Lib Utilities)

```typescript
// src/lib/utils.test.ts
import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
  it('merges multiple class names', () => {
    const result = cn('base', 'extra')
    expect(result).toBe('base extra')
  })

  it('handles tailwind class conflicts', () => {
    const result = cn('text-red-500', 'text-blue-500')
    expect(result).toBe('text-blue-500')
  })
})
```

### Component Tests

```typescript
// src/components/ui/button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, userEvent } from '../../../tests/test-utils'
import { Button } from './button'

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### API Route Tests

```typescript
// src/app/api/contact/route.test.ts
import { describe, it, expect, vi } from 'vitest'
import { POST } from './route'

// Mock dependencies with vi.hoisted for module-level mocks
const { mockResendSend } = vi.hoisted(() => ({
  mockResendSend: vi.fn().mockResolvedValue({ id: 'test-id' })
}))

vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: { send: mockResendSend }
  }))
}))

describe('Contact API', () => {
  it('sends email with valid data', async () => {
    const request = createMockRequest({ 
      name: 'Test',
      email: 'test@example.com',
      message: 'Test message here'
    })
    
    const response = await POST(request)
    const json = await response.json()

    expect(response.status).toBe(200)
    expect(json.success).toBe(true)
    expect(mockResendSend).toHaveBeenCalled()
  })
})
```

## Test Utilities

### Custom Render

Localizado em `tests/test-utils.tsx`:

```typescript
import { render, screen, userEvent } from '../../../tests/test-utils'

// Já exporta todas as utilities do RTL + userEvent
render(<Component />)
screen.getByRole('button')
await userEvent.click(element)
```

### Mocks Globais

Configurados em `tests/setup.ts`:

- ✅ `next/navigation` - useRouter, usePathname, useSearchParams
- ✅ `next/image` - Mock de Image component
- ✅ `framer-motion` - Mock passthrough sem animações
- ✅ window.matchMedia, IntersectionObserver, ResizeObserver

### Mocks Reutilizáveis

Em `tests/mocks/`:

```typescript
// tests/mocks/data.ts
export const mockProjects = [...]  // Mock data para testes
export const mockMembers = [...]

// tests/mocks/resend.ts  
export const mockResend = { ... }  // Mock do Resend API
```

## Best Practices

### ✅ DO

- ✅ Teste **comportamento**, não implementação
- ✅ Use queries acessíveis: `getByRole`, `getByLabelText`
- ✅ Simule interações realistas com `userEvent`
- ✅ Co-localize testes com código
- ✅ Test casos de erro e edge cases
- ✅ Use `waitFor` para elementos assíncronos

```typescript
// ✅ BOM: Testa comportamento
expect(screen.getByRole('button')).toBeDisabled()

// ✅ BOM: Query acessível
screen.getByRole('button', { name: /submit/i })

// ✅ BOM: userEvent para interações
await userEvent.click(button)
```

### ❌ DON'T

- ❌ Não teste detalhes de implementação (estado interno, métodos privados)
- ❌ Evite snapshots excessivos (difíceis de manter)
- ❌ Não use `fireEvent` - prefira `userEvent`
- ❌ Não mock tudo - integre quando possível

```typescript
// ❌ RUIM: Testa implementação
expect(component.state.isOpen).toBe(true)

// ❌ RUIM: Query não-acessível
container.querySelector('.button-class')

// ❌ RUIM: fireEvent (não simula eventos reais)
fireEvent.click(button)
```

## Queries RTL (Testing Library)

**Prioridade** (do mais acessível para menos):

1. **`getByRole`** - Mais acessível (button, link, textbox, etc)
2. **`getByLabelText`** - Para form inputs
3. **`getByPlaceholderText`** - Placeholder de inputs
4. **`getByText`** - Conteúdo de texto visível
5. **`getByTestId`** - Último recurso (use data-testid)

```typescript
// Prioridade alta
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')

// Prioridade média
screen.getByPlaceholderText('Enter your email')
screen.getByText(/success message/i)

// Prioridade baixa (último recurso)
screen.getByTestId('custom-element')
```

## Matchers Úteis

Do `@testing-library/jest-dom`:

```typescript
// Presença no DOM
expect(element).toBeInTheDocument()
expect(element).not.toBeInTheDocument()

// Visibilidade
expect(element).toBeVisible()
expect(element).toBeDisabled()

// Classes e atributos
expect(element).toHaveClass('btn-primary')
expect(element).toHaveAttribute('href', '/home')

// Conteúdo
expect(element).toHaveTextContent('Hello')
expect(input).toHaveValue('test@example.com')

// Foco
expect(element).toHaveFocus()
```

## Mocking

### Mocking Modules

```typescript
// Mock completo de módulo
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => mockResend)
}))

// Mock parcial (mantém o resto)
vi.mock('./utils', async () => ({
  ...(await vi.importActual('./utils')),
  specificFunction: vi.fn()
}))
```

### Mocking Functions

```typescript
const mockFn = vi.fn()

// Mock return value
mockFn.mockReturnValue('test')
mockFn.mockResolvedValue({ data: 'async' })

// Mock implementation
mockFn.mockImplementation((arg) => arg * 2)

// Verificar chamadas
expect(mockFn).toHaveBeenCalled()
expect(mockFn).toHaveBeenCalledWith('arg')
expect(mockFn).toHaveBeenCalledTimes(2)

// Limpar mocks
mockFn.mockClear()  // Limpa histórico
mockFn.mockReset()  // Limpa histórico + implementação
```

## Coverage

### Comandos

```bash
# Gerar relatório de cobertura
npm run test:coverage

# Ver relatório HTML (abre no navegador)
open coverage/index.html
```

### Thresholds

Configurados em `vitest.config.ts`:

- **Lines**: 85%
- **Functions**: 85%
- **Branches**: 80%
- **Statements**: 85%

### Exclusões

Arquivos excluídos do coverage (ver `vitest.config.ts`):

- `node_modules/`, `.next/`, `dist/`
- Config files (`*.config.*`)
- Type definitions (`*.d.ts`)
- Test utilities (`tests/**`)
- Root layout/pages (testados via E2E)

## Debugging Tests

### Vitest UI

```bash
npm run test:ui
```

Interface visual com:
- Execução de testes individuais
- Watch mode automático
- Debugging visual
- Source code viewer

### Debug no VS Code

Adicione breakpoint e execute:

```json
// .vscode/launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Vitest Tests",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["test", "--", "--run"],
  "console": "integratedTerminal"
}
```

### Screen Debug

```typescript
import { screen } from '@testing-library/react'

// Ver estrutura do DOM atual
screen.debug()

// Ver elemento específico
screen.debug(screen.getByRole('button'))
```

## Testing Checklist

Ao criar novos componentes/features:

- [ ] Testes de rendering básico
- [ ] Testes de props/variants
- [ ] Testes de interações (clicks, inputs)
- [ ] Testes de estados (loading, error, success)
- [ ] Testes de acessibilidade (roles, labels)
- [ ] Testes de edge cases
- [ ] Coverage >85% no arquivo (meta recomendada, não obrigatório)

## Common Patterns

### Testing Async Components

```typescript
it('loads data asynchronously', async () => {
  render(<AsyncComponent />)
  
  // Esperar elemento aparecer
  await waitFor(() => {
    expect(screen.getByText('Loaded!')).toBeInTheDocument()
  })
  
  // Ou usar findBy (já tem waitFor embutido)
  const element = await screen.findByText('Loaded!')
  expect(element).toBeInTheDocument()
})
```

### Testing Forms

```typescript
it('submits form with valid data', async () => {
  const handleSubmit = vi.fn()
  const user = userEvent.setup()
  
  render(<Form onSubmit={handleSubmit} />)
  
  await user.type(screen.getByLabelText('Email'), 'test@example.com')
  await user.type(screen.getByLabelText('Password'), 'secret123')
  await user.click(screen.getByRole('button', { name: /submit/i }))
  
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'secret123'
  })
})
```

### Testing Error States

```typescript
it('displays error message on failure', async () => {
  // Mock API failure
  mockApi.mockRejectedValue(new Error('API Error'))
  
  render(<Component />)
  await user.click(screen.getByRole('button'))
  
  await waitFor(() => {
    expect(screen.getByText(/erro/i)).toBeVisible()
  })
})
```

## Resources

- [Vit est Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Queries](https://testing-library.com/docs/queries/about/)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Troubleshooting

### "Cannot find module"
- Verifique path aliases em `vitest.config.ts`
- Use caminhos relativos corretos

### "Document is not defined"
- Certifique-se que `environment: 'jsdom'` está configurado
- Verifique se `jsdom` está instalado

### "Mock não funciona"
- Use `vi.hoisted` para mocks usados no module-level
- Coloque `vi.mock` antes dos imports

### Testes lentos
- Use `vi.mock` para dependências pesadas
- Evite timeouts longos no `waitFor`
- Execute testes específicos: `npm test button`

---

**Última atualização**: Fevereiro 2026  
**Mantido por**: Time TecnoJR
