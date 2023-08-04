import { memo, useState } from 'react'
import TabTitle from './TabTitle/TabTitle'
import styles from './Tabs.module.scss'
import Container from '../Container/Container'

const Tabs = ({
  children,
  preSelectedTabIndex,
  backgroundColor,
  topDivider = false,
  isLoading,
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(preSelectedTabIndex || 0)

  return (
    <section className={styles.tabs}>
      {topDivider && <span className={styles.divider} />}
      <Container>
        <ul className={styles.tabTitles}>
          {children.map((item, index) => (
            <TabTitle
              isLoading={isLoading}
              key={item.props.title}
              title={item.props.title}
              count={item.props.count}
              index={index}
              isActive={index === selectedTabIndex}
              setSelectedTab={setSelectedTabIndex}
            />
          ))}
        </ul>
      </Container>
      <div style={{ backgroundColor }}>
        <Container>
          {children[selectedTabIndex].props.children &&
          children[selectedTabIndex].props.children[0] ? (
            children[selectedTabIndex]
          ) : (
            <h2 className={styles.listEmptyMesage}>The list is empty</h2>
          )}
        </Container>
      </div>
    </section>
  )
}

export default memo(Tabs)
