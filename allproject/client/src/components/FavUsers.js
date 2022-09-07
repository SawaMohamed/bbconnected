import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FavUsers = () => {
  const [favUsers, setFavUsers] = useState(null)
  const [me, setMe] = useState(null)
  const [myFavIds, setMyFavIds] = useState(null)
  const [fav, setFav] = useState(null)
  const [favLayoutHeight, setFavLayoutHeight] = useState("none")
  const [favButtonLayout, setFavButtonLayout] = useState("flex")

  const [cookies, setCookie, removeCookie] = useCookies(null)

  const userId = cookies.UserId

  const getMe = async () => {
    try {
      const activeUser = await axios.get(
        `http://localhost:8000/users/${userId}`
      )
      setMe(activeUser.data)

      setMyFavIds(activeUser.data?.favUsers.map(({ user_id }) => user_id))
    } catch (error) {
      console.log(error.message)
    }
  }

  const getFav = async () => {
    try {
      if (myFavIds) {
        const response = await axios.get('http://localhost:8000/addfav', {
          params: { favIds: JSON.stringify(myFavIds) },
        })
        setFav(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const hideFavLayout = () => {
    if (favLayoutHeight==="flex")
      {
      setFavLayoutHeight("none")
      setFavButtonLayout("flex")
    } else {
      setFavLayoutHeight("flex")
      setFavButtonLayout("none")
    }
  }

  useEffect(() => {
    getMe()
  }, [])

  useEffect(() => {
    getFav()
  }, [myFavIds])

  return (
    <div className='fav-container'>
      {fav?.map(i => (
        <div className='fav-users-cards' key={i?.user_id}>
          <div
            style={{ backgroundImage: 'url(' + i?.url + ')' }}
            className='card'
          >
            <IconButton className="show-card-content" onClick={hideFavLayout} style={{ display:`${favButtonLayout}`}}><ArrowDropDownCircleOutlinedIcon /></IconButton>

<div className="tinder-layout" style={{ display:`${favLayoutHeight}` }}>
  <IconButton className="hide-card-content" onClick={hideFavLayout}><ArrowBackIcon /></IconButton>
  <div className="card-content-about" style={{fontSize:'16px'}}>About me:
    <br></br>
    <br></br> 
    <p style={{fontSize:'14px'}}>{i.about}</p>
    </div>
  <div className="card-content-interest">I am looking for..
    <br></br>
    <br></br>
    <p style={{fontSize:'14px'}}>{i.interest}</p>
    </div>
  <div className="card-content-links">You can also find me at: 
    <br></br>
    <br></br> 
    <p className="interest-content" style={{fontSize:'14px'}}>{i.link_github}{i.link_portfolio}{i.link_linkedin}</p>
</div>
</div>
            <h3 className="card-title">{i?.first_name} {i.last_name} , {i.profession}</h3>
            {/* <p classname="fav-profession">{i?.profession}</p> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavUsers
