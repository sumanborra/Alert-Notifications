// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  return (
    <div className="background-container">
      <h1 className="heading-main">Alert Notifications</h1>
      <Notification>
        <div className="container-icon-text">
          <AiFillCheckCircle className="succes-icon" />
          <div>
            <h1 className="heading-title">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container-icon-text">
          <RiErrorWarningFill className="succes-icon error" />
          <div>
            <h1 className="heading-title error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container-icon-text">
          <MdWarning className="succes-icon warning" />
          <div>
            <h1 className="heading-title warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container-icon-text">
          <MdInfo className="succes-icon info" />
          <div>
            <h1 className="heading-title info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </Notification>
    </div>
  )
}
export default AlertNotifications
