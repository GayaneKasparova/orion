import React from 'react'

import styled from 'styled-components'
import {graphql} from 'gatsby'
import {theme} from "../../../styles/theme";

const IconContainer = styled.span`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: ${theme.space.m}px;
  background-color: ${theme.colors.blue};
  transition: background-color 0.4s ease-in-out;

  ${theme.media.md} {
    font-size: ${theme.fontSizes.m};
    width: 46px;
    min-width: 46px;
    height: 46px;
    margin-right: ${theme.space.l}px;
  }
`

const FileInfo = styled.h3`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};

  &::after {
    content: '${({fileProperties}) => `${fileProperties}`}';
    color: ${theme.colors.red};
  }

  ${theme.media.md} {
    font-size: ${theme.fontSizes.m};
  }
`
const List = styled.ul`
  list-style-type: none;

  > li {
    padding: ${theme.space.s}px 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;

    svg {
      transition: color 0.4s ease-in-out;
      color: ${theme.colors.blue};
      width: 22px;
      height: 22px;

      ${theme.media.md} {
        width: 32px;
        height: 32px;
      }
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        span {
          background-color: ${theme.colors.red};
        }

        svg {
          color: ${theme.colors.white};
        }
      }
    }

    ${theme.media.md} {
      > li {
        padding: ${theme.space.s}px 0;
      }
    }
  }
`


const FileItem = ({name, format, url, size}) => (
    <li>
        <a download={true} href={url ?? ''} target={'_blank'} rel="noreferrer" >
            <IconContainer>
                <svg width="1em" height="1em" viewBox="0 0 32 32"
                     xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenOdd">
                        <path fill="#ffffff" fillRule="nonzero"
                              d="M17.3106602,5.25 L24.75,12.6893398 L24.75,24 C24.75,25.5187831 23.5187831,26.75 22,26.75 L22,26.75 L10,26.75 C8.48121694,26.75 7.25,25.5187831 7.25,24 L7.25,24 L7.25,8 C7.25,6.48121694 8.48121694,5.25 10,5.25 L10,5.25 L17.3106602,5.25 Z M16.25,6.75 L10,6.75 C9.30964406,6.75 8.75,7.30964406 8.75,8 L8.75,8 L8.75,24 C8.75,24.6903559 9.30964406,25.25 10,25.25 L10,25.25 L22,25.25 C22.6903559,25.25 23.25,24.6903559 23.25,24 L23.25,24 L23.25,13.75 L16.25,13.75 L16.25,6.75 Z M22.189,12.25 L17.75,7.811 L17.75,12.25 L22.189,12.25 Z"/>
                    </g>
                </svg>
            </IconContainer>
            <FileInfo
                fileProperties={`(${format?.toUpperCase()}, ${Math.round((size ?? 0) / 10.24) / 100}KB)`}>{`${name} `}</FileInfo>
        </a>
    </li>
)

const FileList = ({files: {files, title}}) => {
    return (
        <div>
            <Title>{title}</Title>
            <List>
                {files?.map(file => (
                    <FileItem name={file?.basename} format={file?.format} url={file?.url} size={file?.size}
                              key={file?.basename}/>
                ))}
            </List>
        </div>
    )
}

export default FileList

export const query = graphql`
    fragment FileList on DatoCmsFileList {
        id
        model {
            apiKey
        }
        title
        files {
            basename
            format
            url
            size
        }
    }`

const Title = styled.h2``
