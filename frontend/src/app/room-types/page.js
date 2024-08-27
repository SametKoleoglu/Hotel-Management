import { RoomType } from "@/components";
import Link from "next/link";

async function fetchData(page) {
  const response = await fetch(
    `http://localhost:8000/api/v1/room-types/?page=${page}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export default async function page({ searchParams }) {
  const page = searchParams.page || 1;
  const roomTypes = await fetchData(page);
  const nextPage = parseInt(page) + parseInt(1);
  const links = [];

  if (roomTypes.previous) {
    links.push(
      <Link className="page-link" href={`/room-types?page=${page - 1}`}>
        Previous
      </Link>
    );
  }

  for (let i = 1; i < roomTypes.count; i++) {
    if (page == i) {
      links.push(
        <Link className="page-link active" href={`/room-types/?page=${i}`}>
          {i}
        </Link>
      );
    } else {
      links.push(
        <Link className="page-link" href={`/room-types/?page=${i}`}>
          {i}
        </Link>
      );
    }
  }

  if (roomTypes.next) {
    links.push(
      <Link className="page-link" href={`/room-types/?page=${nextPage}`}>
        Next
      </Link>
    );
  }

  return (
    <section className="container my-5">
      <h2 className="my-5">ROOM TYPES ({roomTypes.count})</h2>
      <div className="row text-center">
        {roomTypes.results.map((room, index) => (
          <RoomType item={room} key={index} />
        ))}
      </div>

      <nav className="">
        <ul className="pagination">
          
          {links.map((link, index) => (
            <li key={index} className="page-item">{link}</li>
          ))}
          
        </ul>
      </nav>
    </section>
  );
}
