import PropTypes from 'prop-types'
import styles from './DropDownMenu.module.scss'
import { useRef, useEffect, memo } from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

function DropDownMenu({ isOpen, setIsOpen, toggle, links }) {
  const wrapperRef = useRef()

  function close(action) {
    setIsOpen(false)
    action && action()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        close()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={wrapperRef} className={styles.dropDown}>
      {toggle}
      {isOpen && (
        <div className={styles.list}>
          {links.map((link) => (
            // <Link
            //   key={link.to}
            //   onClick={() => close(link.action)}
            //   to={link.to}
            //   className={styles.link}
            // >
            //   <img src={link.img} alt="" />
            //   <span>{link.title}</span>
            // </Link>
            <CustomLink key={link.to} icon={link.img} to={link.to} onClick={link.action}>
              <span>{link.title}</span>
            </CustomLink>
          ))}
        </div>
      )}
    </div>
  )
}

DropDownMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.element,
  links: PropTypes.array,
}

export default memo(DropDownMenu)
