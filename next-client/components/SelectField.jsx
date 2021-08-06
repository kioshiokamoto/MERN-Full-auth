// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import styles from "../styles/components/SelectField.module.css"
import ZIcon from "./Icon"

const { Provider, Consumer } = React.createContext(false)

/**
 *
 * @template T
 * @typedef {object} Option
 * @property {node} children
 * @property {string|number|boolean} value
 * @property {boolean} readOnly
 * @property {string=} image
 *
 * @param {Option} param0
 *
 */ 

export function Option({
  value,
  children,
  image,
  readOnly
}) {
  // eslint-disable-next-line camelcase
  const image_res = {}

  if (image !== undefined) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    image_res.image = image
  }

  return (
    <Consumer>
      {props => (
        <ul
          className={`${styles.optionContainer} ${readOnly && styles.readOnly}`}
          onClick={() =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line camelcase
            props.handleSelect({ value, label: children, ...image_res })
          }
          // readOnly={readOnly}
        >
          {image && <img className={styles.image} src={image} />}

          {children}
        </ul>
      )}
    </Consumer>
  )
}

Option.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired,
  image: PropTypes.string,
  readOnly: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

Option.defaultProps = {
  readOnly: false
}
/**
 * @typedef {object} PropsSelectField
 * @property {{ label: string, value: string|number } |boolean} option
 * @property {function(object):void=} onChange
 * @property {boolean=} fullWidth
 * @property {boolean=} loading
 * @property {boolean=} disabled
 * @property {boolean=} readOnly
 * @property {string=} className
 * @property {string=} id
 * @property {object=} style
 * @property {boolean=} light
 * @property {string=} minWidth
 * @property {function(string):void=} onSearch
 * @property {boolean=} search
 * @property {string=} placeholder
 * @property {string=} name
 * @property {string=} errorHelper
 * @property {boolean=} required
 * @property {function():void=} onScroll
 * @property {number=} length
 * @property {boolean=} hasMore
 * @property {boolean=} transparent
 *
 * @param {PropsSelectField & { children: any } } param0
 */
function SelectField({
  children,
  option,
  onChange,
  fullWidth,
  loading,
  disabled,
  className,
  style,
  light,
  onSearch,
  search,
  name,
  required,
  readOnly,
  errorHelper,
  ...props
}) {
  const [open, setOpen] = React.useState(false)
  const [textSearch, setText] = React.useState("")
  const [id] = React.useState(
    `SELECT_FIELD_${Math.random().toString(36).substr(2, 9)}`
  )

  // click fuera del select
  const handleOut = React.useCallback(
    ev => {
      if (readOnly || disabled) return
      if (ev.target.closest("." + id)) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    },
    [readOnly || disabled]
  )

  React.useEffect(() => {
    document
      .querySelector(".chakra-modal__content")
      .addEventListener("click", handleOut)

    return () => {
      document.removeEventListener("click", handleOut)
    }
  }, [handleOut])

  function handleChange(ev) {
    onSearch(ev.target.value)
    setText(ev.target.value)
  }

  function handleSelect(_option) {
    onChange(_option)
    setOpen(false)
  }

  return (
    <div
      className={`${className} ${fullWidth && styles.fullWidth} ${
        light ? styles.light : styles.dark
      } ${styles.selectFieldContainer}`}
      style={style}
    >
      {option && option.image && (
        <img src={option.image} className={`${!readOnly && styles.circled}`} />
      )}

      <input
        {...props}
        autoComplete="off"
        readOnly
        className={`${id} ${fullWidth && styles.fullWidth} ${
          readOnly && styles.forReadOnly
        } ${required && styles.required} ${option && styles.img} ${
          styles.inputField
        } ${errorHelper && styles.errorHelper}`}
        value={option ? option.label : ""}
        onClick={handleOut}
        required={required}
        disabled={disabled}
        onChange={() => null}
      />

      {loading && !search && (
        <div style={{ top: "10px" }} className={styles.loadingContainer}>
          {/* <Spinner color={"var(--text-black-50)"} scale={1} /> */}
          <ZIcon name="alarm" />
        </div>
      )}

      <input
        type="hidden"
        value={option ? option.value : ""}
        name={name}
        onChange={() => {
          // funtion onChange
        }}
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Provider value={{ option, handleSelect }}>
        <div className={`${styles.result} ${open && styles.show}`}>
          {search && (
            <li className={styles.searchContainer}>
              <input
                {...props}
                className={`${id} ${search && styles.search} ${
                  option && styles.img
                } ${fullWidth && styles.fullWidth} ${styles.inputField} `}
                placeholder="Buscar..."
                value={search ? textSearch : ""}
                onChange={handleChange}
                autoComplete="off"
              />

              {loading && (
                <div className={styles.loadingContainer}>
                  {/* <Spinner color={"var(--text-black-50)"} scale={0.7} /> */}
                  <ZIcon name="alarm" />
                </div>
              )}
              {!loading && (
                <div className={styles.loadingContainer}>
                  {/* <Spinner color={"var(--text-black-50)"} scale={0.7} /> */}

                  <ZIcon name="search" className={styles.iconSearch} />
                </div>
              )}
            </li>
          )}

          <div
            id="scrollableDiv"
            className={`${search && styles.searchFluid} ${styles.optionsFluid}`}
          >
            {children}
          </div>
        </div>
      </Provider>

      {(!loading || search) && (
        <ZIcon
          name="arrow-bottom"
          disabled={readOnly || disabled}
          className={styles.iconDown}
        />
      )}

      {/* <HelperText errorHelper={props.errorHelper}>
        {props.errorHelper}
      </HelperText> */}
    </div>
  )
}

SelectField.defaultProps = {
  option: false,
  fullWidth: false,
  className: "",
  onChange: () => null,
  search: false,
  onSearch: () => null,
  minWidth: "",
  loading: false,
  disabled: false,
  errorHelper: false,
  light: false,
  readOnly: false,
  onScroll: false,
  length: 1,
  hasMore: false,
  transparent: false
}

export default SelectField


export function Caption({ children }) {
  return <ul className={styles.captionContainer}>{children}</ul>
}

Caption.propTypes = {
  children: PropTypes.node.isRequired
}
