import Link from 'next/link'

export default function RoomType({item}) {

  var images = item.room_type_images;
  if(images[0]){
    var first_image = images[0].image;
  }else{
    var first_image = 'images/thumbs/1.jpg'
  }

     return (
          <div className="col-4 my-3">
          <div className="card">
            <Link href={`/room-types/${item.title}`}>
              <img
                src={first_image}
                style={{ height: '500px',width: '414px' }}
                alt="Room Types"
              />
            </Link>

            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href={`/room-types/${item.uuid}`} className="text-white">
                  {item.title}
                </Link>
              </h5>
            </div>
          </div>
        </div>
     );
}