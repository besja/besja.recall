## Controller Script Python "feedback_validator"
##bind container=container
##bind context=context
##bind namespace=
##bind script=script
##bind state=state
##bind subpath=traverse_subpath
##parameters=
##title=

from Products.CMFPlone import PloneMessageFactory as _
request = container.REQUEST
RESPONSE =  request.RESPONSE
# state.setError("testerror", "Выключаем тестовое поле", new_status="failure")

if request.get('name', '') == "":
	state.setError("name", "Введите имя")

if request.get('phone', '') == "":
	state.setError("phone", "Введите телефон")


if state.getErrors():
    context.plone_utils.addPortalMessage(_(u'Please correct the indicated errors.'), 'error')
    state.setStatus('failure')
return state
