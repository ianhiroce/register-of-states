import { Header } from "../components/Header"
import { Sidebar} from "../components/Sidebar"
import { Table } from "../components/Table"

export function Home () {
  return (
    <>
      <Header />
      <Table />
      <Sidebar />
    </>
  )
}