export interface RouteInfo {
  id: number
  name: string
  path?: string
  icon?: string
  children?: Array<RouteInfo>
}
