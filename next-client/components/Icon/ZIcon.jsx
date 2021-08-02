import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import { getColorByName } from "./utils"
import MoreH from "./MoreH"
import MoreV from "./MoreV"
import Location from "./Location"
import ArrowBottom from "./ArrowBottom"
import LockOpen from "./LockOpen"
import Loop from "./Loop"
import Warning from "./Warning"
import Build from "./Build"
import LockClose from "./LockClose"
import Pencil from "./Pencil"
import Close from "./Close"
import CircleClose from "./CircleClose"
import Trash from "./Trash"
import Times from "./Times"
import Save from "./Save"
import Alert from "./Alert"
import Alarm from "./Alarm"
import Ban from "./Ban"
import PowerOff from "./PowerOff"
import Search from "./Search"
import CloudUpload from "./CloudUpload"
import HelpOutline from "./HelpOutline"
import Hand from "./Hand"
import Transfer from "./Transfer"
import Assignment from "./Assignment"
import AssignmentLate from "./AssignmentLate"
import CheckCircle from "./CheckCircle"
import LibraryBooks from "./LibraryBooks"
import AssignmentReturned from "./AssignmentReturned"
import TransferWithStation from "./TransferWithStation"
import Filter from "./Filter"
import Alert2 from "./Alert2"
import Menu from "./Menu"
import Calendar from "./Calendar"
import Print from "./Print"
import Ballot from "./Ballot"
import Thermostate from "./Thermostate"
import Boat from "./Boat"
import Unarchive from "./Unarchive"
import Label from "./Label"
import Google from "./Google"
import Facebook from "./Facebook"
import Logo from "./Logo"
import Twitter from "./Twitter"
import Instagram from "./Instagram"
import Star from "./Star"
import Border from "./Border"
import Energy from "./Energy"
import Facebookv2 from "./Facebookv2"
import Dowload from "./Dowload"
import ArrowRight from "./ArrowRight"
import ArrowLeftv2 from "./ArrowLeftv2"
import Avatar from "./Avatar"
import Ring from "./Ring"
import Cart from './Cart'
import Bill from "./Bill"

/**
 *
 * @param {import('./types').PropsVIcon} param0
 */
function VIcon({
  name,
  color,
  size,
  pointer,
  disabled = false,
  ...props
}) {
  const _color = getColorByName(color)
  const style = {
    fontSize: `${size}px`,
    ...(pointer && { cursor: "pointer" }),
    ...(disabled && { pointerEvents: "none", opacity: ".5", cursor: "default" })
  }

  switch (name) {
    case "bill":
      return <Bill {...props} style={style} color={_color} />
    case "ring":
      return <Ring {...props} style={style} color={_color} />
    case "cart":
      return <Cart {...props} style={style} color={_color} />
    case "avatar":
      return <Avatar {...props} style={style} color={_color} />
    case "arrow-leftv2":
      return <ArrowLeftv2 {...props} style={style} color={_color} />
    case "arrow-right":
      return <ArrowRight {...props} style={style} color={_color} />
    case "facebookv2":
      return <Facebookv2 {...props} style={style} color={_color} />
    case "border":
      return <Border {...props} style={style} color={_color} />
    case "energy":
      return <Energy {...props} style={style} color={_color} />
    case "star":
      return <Star {...props} style={style} color={_color} />
    case "instagram":
      return <Instagram {...props} style={style} color={_color} />
    case "twitter":
      return <Twitter {...props} style={style} color={_color} />
    case "logo":
      return <Logo {...props} style={style} color={_color} />
    case "facebook":
      return <Facebook {...props} style={style} color={_color} />
    case "google":
      return <Google {...props} style={style} color={_color} />
    case "label":
      return <Label {...props} style={style} color={_color} />
    case "unarchive":
      return <Unarchive {...props} style={style} color={_color} />
    case "boat":
      return <Boat {...props} style={style} color={_color} />
    case "thermostate":
      return <Thermostate {...props} style={style} color={_color} />
    case "ballot":
      return <Ballot {...props} style={style} color={_color} />
    case "print":
      return <Print {...props} style={style} color={_color} />
    case "more-h":
      return <MoreH {...props} style={style} color={_color} />
    case "more-v":
      return <MoreV {...props} style={style} color={_color} />
    case "location":
      return <Location {...props} style={style} color={_color} />
    case "arrow-bottom":
      return <ArrowBottom {...props} style={style} color={_color} />
    case "lock-open":
      return <LockOpen {...props} style={style} color={_color} />
    case "loop":
      return <Loop {...props} style={style} color={_color} />
    case "warning":
      return <Warning {...props} style={style} color={_color} />
    case "build":
      return <Build {...props} style={style} color={_color} />
    case "lock-close":
      return <LockClose {...props} style={style} color={_color} />
    case "pencil":
      return <Pencil {...props} style={style} color={_color} />
    case "close":
      return <Close {...props} style={style} color={_color} />
    case "circle-close":
      return <CircleClose {...props} style={style} color={_color} />
    case "trash":
      return <Trash {...props} style={style} color={_color} />
    case "times":
      return <Times {...props} style={style} color={_color} />
    case "save":
      return <Save {...props} style={style} color={_color} />
    case "alert":
      return <Alert {...props} style={style} color={_color} />
    case "alarm":
      return <Alarm {...props} style={style} color={_color} />
    case "ban":
      return <Ban {...props} style={style} color={_color} />
    case "power-off":
      return <PowerOff {...props} style={style} color={_color} />
    case "cloud-upload":
      return <CloudUpload {...props} style={style} color={_color} />
    case "help-outline":
      return <HelpOutline {...props} style={style} color={_color} />
    case "search":
      return <Search {...props} style={style} color={_color} />
    case "transfer":
      return <Transfer {...props} style={style} color={_color} />
    case "hand":
      return <Hand {...props} style={style} color={_color} />
    case "assignment":
      return <Assignment {...props} style={style} color={_color} />
    case "assignment-late":
      return <AssignmentLate {...props} style={style} color={_color} />
    case "check-cirle":
      return <CheckCircle {...props} style={style} color={_color} />
    case "library-books":
      return <LibraryBooks {...props} style={style} color={_color} />
    case "assignment-returned":
      return <AssignmentReturned {...props} style={style} color={_color} />
    case "transfer-with-station":
      return <TransferWithStation {...props} style={style} color={_color} />
    case "filter":
      return <Filter {...props} style={style} color={_color} />
    case "alert2":
      return <Alert2 {...props} style={style} color={_color} />
    case "menu":
      return <Menu {...props} style={style} color={_color} />
    case "calendar":
      return <Calendar {...props} style={style} color={_color} />
    case "dowload":
      return <Dowload {...props} style={style} color={_color} />
    default:
      return null
  }
}

VIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "white",
    "danger",
    "secondary",
    "success",
    "white",
    "dark",
    "gray",
    "warning"
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  pointer: PropTypes.bool
}

VIcon.defaultProps = {
  color: "primary",
  size: 15,
  pointer: false
}

export default VIcon
