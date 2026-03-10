import { useGetScent } from "@/api/getScents"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Scent } from "@/types/scent"
import { ResponseType } from "@/types/response"
import { SkeletonCheckBox } from "./skeleton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowDownWideNarrow } from "lucide-react"
import { useGetBrand } from "@/api/getBrands"
import { Brand } from "@/types/brand"
import { ResponseTypeBrand } from "@/types/responseBrand"

export function CheckboxGroup() {

const {result, loading} : ResponseType = useGetScent()
const {resultBrand} : ResponseTypeBrand = useGetBrand()

if (loading) return <SkeletonCheckBox/>

  return (
    
    <FieldSet className="">

          <FieldLegend className="  flex items-center gap-3" variant="label">
            <ArrowDownWideNarrow/>
            <h1 className="text-lg">Filtros</h1>
          </FieldLegend>

          <Accordion 
          type="multiple" 
          defaultValue={["aromas", "marca"]}
          className="">

            <AccordionItem value="aromas" className="">

              <AccordionTrigger className=" w-fit font-sans hover:no-underline !justify-start gap-2 items-center [&>svg]:translate-y-0">
                <FieldDescription className="font-normal text-sm">
                  Aromas
                </FieldDescription>
              </AccordionTrigger>

              <AccordionContent>

                <FieldGroup className="gap-3">

                  {result?.map((scent: Scent) => (

                    <Field
                      key={scent.id}
                      orientation="horizontal"
                    >

                      <Checkbox
                        id={scent.slug}
                        name={scent.slug}
                      />

                      <FieldLabel
                        htmlFor={scent.slug}
                        className="font-normal"
                      >
                        {scent.scentName}
                      </FieldLabel>

                    </Field>

                  ))}

                </FieldGroup>

              </AccordionContent>

            </AccordionItem>

            <AccordionItem value="marca">

              <AccordionTrigger className="font-sans hover:no-underline !justify-start gap-2 items-center [&>svg]:translate-y-0">
                <FieldDescription className="font-normal text-sm">
                  Marcas
                </FieldDescription>
              </AccordionTrigger>

                <AccordionContent>

                <FieldGroup className="gap-3">

                  {resultBrand?.map((brand: Brand) => (

                    <Field
                      key={brand.id}
                      orientation="horizontal"
                    >

                      <Checkbox
                        id={brand.slug}
                        name={brand.slug}
                      />

                      <FieldLabel
                        htmlFor={brand.slug}
                        className="font-normal"
                      >
                        {brand.brandName}
                      </FieldLabel>

                    </Field>

                  ))}

                </FieldGroup>

              </AccordionContent>

            </AccordionItem>

          </Accordion>

        </FieldSet>
  )
}
   