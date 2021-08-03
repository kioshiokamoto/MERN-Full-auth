// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* istanbul ignore file */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import styles from "../../styles/components/FileUpload.module.css"
import ZIcon from "../Icon"
import { Consumer } from "./FileUpload"

export default function FileItem({ file, onDelete }) {
  return (
    <Consumer>
      {props => (
        <>
          {file.deleted !== true && (
            <div className={styles.fileItemStyled}>
              {
                <>
                  {/* <Icon  name={file.icon} /> */}
                  <ZIcon name="alarm" className="mr1" />
                  <p className="mr-2">{file.name}</p>

                  {!file.error && (
                    <a
                      href={file.url}
                      target="blank"
                      download={!file.name && "prueba.png"}
                      title={!file.name && "prueba.png"}
                    >
                      <ZIcon name="dowload" pointer />
                    </a>
                  )}
                  {file.error && (
                    <span>
                      <ZIcon
                        name="exclamation-circle"
                        pointer
                        // color="var(--danger)"
                        // hover="var(--danger)"
                      />
                    </span>
                  )}
                </>
              }

              {props.remove && !props.readOnly && (
                <ZIcon
                  className="ml2"
                  name="trash"
                  onClick={onDelete}
                  pointer
                />
              )}
            </div>
          )}
        </>
      )}
    </Consumer>
  )
}

FileItem.propTypes = {
  /**
   * file
   */
  file: PropTypes.object.isRequired,
  /**
   * onDelete
   */

  onDelete: PropTypes.func
}
