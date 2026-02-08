import { Text } from "@/components/ui/typography";

/**
 * Footer copyright notice with current year.
 *
 * Displays centered copyright text with dynamic year from `new Date().getFullYear()`.
 * Includes top border separator with purple accent.
 *
 * @example
 * // Used in Footer component (after other footer sections)
 * <Copyright />
 */
export function Copyright() {
  return (
    <div className="mt-8 border-t border-purple-500/20 pt-8 text-center">
      <Text variant="muted" size="sm">
        ©{new Date().getFullYear()} TecnoJr - Todos os direitos reservados.
      </Text>
    </div>
  );
}
