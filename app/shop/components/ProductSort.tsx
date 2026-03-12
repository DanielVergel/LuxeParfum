"use client"

import { SortOption } from "@/api/useGetProducts"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  onSortChange: (value: SortOption) => void
}

export default function ProductSort({ onSortChange }: Props) {
  return (
    <div className="flex items-center justify-between ">

      <Select 
      onValueChange={(value) => onSortChange(value as SortOption)}>
        
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Seleccionar orden" />
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="priceAsc">
            Precio: menor a mayor
          </SelectItem>

          <SelectItem value="priceDesc">
            Precio: mayor a menor
          </SelectItem>

          <SelectItem value="nameAsc">
            Nombre: A-Z
          </SelectItem>

          <SelectItem value="nameDesc">
            Nombre: Z-A
          </SelectItem>

          <SelectItem value="popularity">
            Popularidad
          </SelectItem>

        </SelectContent>
      
      </Select>

    </div>
  )
}