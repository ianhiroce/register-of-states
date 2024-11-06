import { Header } from "../components/Header"
import { Sidebar} from "../components/Sidebar"
import { Table } from "../components/Table"
import "./Home.css"

export function Home () {
  return (
    <>
      <Sidebar />
      <Header />
      <Table />
    </>
  )
}