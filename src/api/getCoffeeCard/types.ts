export type TGetCoffeeCardReturn = Promise<ICoffeeCard>

export interface ICoffeeCard {
  id: number
  uid: string
  blend_name: string
  origin: string
  variety: string
  notes: string[]
  intensifier: string
  imageUrl: string
}
