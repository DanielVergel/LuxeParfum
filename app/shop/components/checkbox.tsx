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
            <p className="text-lg">Filtros</p>
          </FieldLegend>

          <Accordion 
          type="multiple" 
          defaultValue={["aromas", "marca"]}
          className="">

            <AccordionItem value="aromas" 
            className="">

              <AccordionTrigger className=" font-sans ">
                <span className=" font-semibold ml-2 text-neutral-700">Aromas</span>
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

              <AccordionTrigger className="font-sans ">
                 <span className=" font-semibold ml-2 text-neutral-700">Marcas</span>
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

             <AccordionItem value="tamaño">

              <AccordionTrigger className="font-sans ">
                 <span className=" font-semibold ml-2 text-neutral-700">Tamaño</span>
              </AccordionTrigger>

                <AccordionContent>

                <FieldGroup className="gap-3">

                    <Field
                      key="gbffbg"
                      orientation="horizontal"
                    >

                      <Checkbox
                        id="bgffb"
                        name="gbfgbg"
                      />

                      <FieldLabel
                        htmlFor="frgfgt"
                        className="font-normal"
                      >
                        50ml
                      </FieldLabel>

                    </Field>

                    <Field
                      key="gbcbg"
                      orientation="horizontal"
                    >

                      <Checkbox
                        id="bfgb"
                        name="gbgfbg"
                      />

                      <FieldLabel
                        htmlFor="frggft"
                        className="font-normal"
                      >
                        100ml
                      </FieldLabel>

                    </Field>

                </FieldGroup>

              </AccordionContent>

            </AccordionItem>

          </Accordion>

        </FieldSet>
  )
}
   