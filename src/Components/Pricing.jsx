import React from 'react'
import "../Components/stylesheets/pricing_style.css"
import Line_title from '../micro_components/Line_title'
import Price_options from '../micro_components/Price_options'
import Pricin_feature from '../micro_components/Pricin_feature'

function Pricing() {
  return (
    <div className="pricing_container">
        <Line_title text="PRICING" theme="light"/>
        <div className="p_title">Three ways to implement AI into your business</div>
        <div className="p_text">While our services can be offered individually to address specific requirements, we highly recommend exploring below packages for a more holistic experience. Before committing to a package, we will conduct a discovery call to understand your business goals and assess how we can help you with your projects</div>
        <div className="p_grid">
          <Price_options title="Starter"
          text="Best for small to medium-sized businesses that are taking their first steps in the AI automation."
          price="1500"
          order={1}
          />
          <Price_options title="Professional"
          text="Designed for businesses seeking comprehensive features for an advanced AI integration"
          price="2500"
          recommended={true}
          order={3}
          />
          <Price_options title="Enterprise Plus"
          text="Ideal for enterprises with substantial AI demands, including LLM security and KPI tracking programs"
          price="6500"
          order={5}
          />
          <div className="included">What's included</div>
          <Pricin_feature f_array={[
            "Basic report on potential AI enhancements.",
            "3 hours of expert AI consulting per month.",
            "Access to standard AI tools.",
            "1 basic AI workshop per year for staff.",
            "1-hour AI tool review session per quarter."
          ]} order={2}/>
          <Pricin_feature f_array={[
            "Basic report on potential AI enhancements.",
            "3 hours of expert AI consulting per month.",
            "Access to standard AI tools.",
            "1 basic AI workshop per year for staff.",
            "1-hour AI tool review session per quarter."
          ]} order={4}/>
          <Pricin_feature f_array={[
            "Basic report on potential AI enhancements.",
            "3 hours of expert AI consulting per month.",
            "Access to standard AI tools.",
            "1 basic AI workshop per year for staff.",
            "1-hour AI tool review session per quarter."
          ]} order={6}/>
        </div>
    </div>
  )
}

export default Pricing
