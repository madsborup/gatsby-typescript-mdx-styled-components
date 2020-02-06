import React from "react"
import styled from "styled-components"
import PlainLink from "./designSystem/PlainLink"
import tokens from "./designSystem/tokens"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }: Props) => {
  const StyledHeader = styled.div`
    border-bottom: 1px solid ${tokens.colors.border};
    padding: ${tokens.spacing.large}px 0 ${tokens.spacing.xxsmall}px;
    margin-bottom: ${tokens.spacing.xlarge}px;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    margin: 0 auto;
    max-width: ${tokens.CONTENT_WIDTH}px;
  `

  const NavLink = styled(PlainLink)`
    color: ${tokens.colors.textMuted};

    &:hover {
      color: ${tokens.colors.text};
      text-decoration: none;
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.text};
      font-weight: 500;
    }
  `

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" }
  ]

  return (
    <StyledHeader>
      <Nav>
        {links.map(({ label, to }) => (
          <NavLink to={to} activeClassName="active">{label}</NavLink>
        ))}
      </Nav>
    </StyledHeader>
  )
}

export default Header
