import React from "react";

const SubMenu = ({subMenuItems}) => (
    <ul>
        {
            subMenuItems.map(item => (
                <li key={item.id}>
                    <a href={item.url} target={item.openInNewTab ? "_blank" : "_self"} rel='noreferrer'>
                        {item.title}
                    </a>
                </li>
            ))
        }
    </ul>
)

export default SubMenu