import { Skeleton } from "@/components/ui/skeleton"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { ArrowDownWideNarrow } from "lucide-react"

export function SkeletonCheckBox() {
  return (
    <FieldSet>

      <FieldLegend className="  flex items-center gap-3" variant="label">
            <ArrowDownWideNarrow/>
            <p className="text-lg">Filtros</p>
      </FieldLegend>

      <FieldDescription>
        
      </FieldDescription>

      <FieldGroup className="-mt-4 gap-3">

        {Array.from({ length: 9 }).map((_, i) => (
          <Field key={i} orientation="horizontal" className="flex items-center gap-2">

       
            <Skeleton className="h-4 w-4 bg-white rounded-sm" />

            <Skeleton className="h-4 bg-white w-24" />

          </Field>
        ))}

      </FieldGroup>

    </FieldSet>
  )
}
