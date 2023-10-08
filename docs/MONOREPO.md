# Описание устройства монорепозитория

1. Монорепозиторий управляется связкой turborepo + pnpm
2. pnpm обеспечивает управление зависимостями, их установку и контроль версий
3. turborepo обеспечивает кеширование и оркестрирование выполнения скриптов, а так же кодогенерацию

## Полезные команды

1. Установить зависимости - `pnpm i`
2. Запустить сторибук в одном из пакетов (например - "ui") - `turbo run dev --filter=@sneg240/ui` (см. [turbo.json](../turbo.json) и [@sneg240/ui/package.json](../packages/ui/package.json))
3. Запустить автоматические проверки во всем проекте - `turbo run check` (см. [turbo.json](../turbo.json))
4. Сгенерировать новый пакет - `pnpm run generate:package` (см. [package.json](../package.json))

## Полезные ссылки

- [Turborepo CLI](https://turbo.build/repo/docs/reference/command-line-reference)
- [Turborepo CodeGen](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation)
- [Turborepo Filter](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
