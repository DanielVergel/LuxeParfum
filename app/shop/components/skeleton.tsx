import { Skeleton } from "@/components/ui/skeleton"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

export function SkeletonCheckBox() {
  return (
    <FieldSet>

      <FieldLegend variant="label">
        <h1>Filtrar por:</h1>
      </FieldLegend>

      <FieldDescription>
        Aromas
      </FieldDescription>

      <FieldGroup className="-mt-4 gap-3">

        {Array.from({ length: 9 }).map((_, i) => (
          <Field key={i} orientation="horizontal" className="flex items-center gap-2">

            {/* Checkbox skeleton */}
            <Skeleton className="h-4 w-4 rounded-sm" />

            {/* Text skeleton */}
            <Skeleton className="h-4 w-24" />

          </Field>
        ))}

      </FieldGroup>

    </FieldSet>
  )
}
